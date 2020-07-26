import { database, TIMESTAMP } from "./init";

const modelFor = referencePath => {
  const reference = database.ref(referencePath);

  return class Model {
    static async getSnapshotValueFromReference(reference) {
      const snapshot = await reference.once("value");
      return snapshot.val();
    }

    static async getAll() {
      return this.getSnapshotValueFromReference(reference);
    }

    static async create(item) {
      const newPostReference = reference.push(item);
      const newPostValue = await this.getSnapshotValueFromReference(
        newPostReference
      );
      const newPostKey = newPostReference.key;
      return { [newPostKey]: newPostValue };
    }

    static getTimestamp() {
      return TIMESTAMP;
    }
  };
};

export default modelFor;
