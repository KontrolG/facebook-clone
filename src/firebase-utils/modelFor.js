import { database, TIMESTAMP } from "./init";

const modelFor = referencePath => {
  const reference = database.ref(referencePath);
  return {
    reference,
    async getSnapshotValueFromReference(reference) {
      const snapshot = await reference.once("value");
      return snapshot.val();
    },
    getAll() {
      return this.getSnapshotValueFromReference(reference);
    },
    async create(item) {
      const newItemReference = await this.getNewItemReference(item);
      return this.getCreatedItem(newItemReference);
    },
    getNewItemReference(item) {
      return reference.push(item);
    },
    async getCreatedItem(itemReference) {
      const newItemValue = await this.getSnapshotValueFromReference(
        itemReference
      );
      return this.getCreatedItemFromSnapshotValue(itemReference, newItemValue);
    },
    getCreatedItemFromSnapshotValue({ key }, snapshotValue) {
      return { [key]: snapshotValue };
    },
    deleteItem(postId) {
      return reference.child(postId).remove();
    },
    timestamp: TIMESTAMP
  };
};

export default modelFor;
