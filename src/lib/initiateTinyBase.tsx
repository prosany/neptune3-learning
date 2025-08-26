// libs/initiateTinyBase.ts
import { createStore } from 'tinybase';
import { createIndexedDbPersister } from 'tinybase/persisters/persister-indexed-db';

export const store = createStore().setTablesSchema({
  presets: {},
});

export const persister = createIndexedDbPersister(store, 'neptune3_presets');

// Save automatically
store.addTablesListener(() => persister.save());

// ✅ Ready promise
let resolveReady: () => void;
export const tinyStoreReady = new Promise<void>((resolve) => {
  resolveReady = resolve;
});

persister.load().then(() => {
  console.log('TB-L!');
  resolveReady();
});

export class TinyStore {
  private readonly tableId = 'presets';

  get(key: string): any {
    return store.getRow(this.tableId, key) ?? null;
  }

  set(key: string, value: any): void {
    store.setRow(this.tableId, key, value);
  }

  remove(key: string): void {
    store.delRow(this.tableId, key);
  }

  has(key: string): boolean {
    return store.hasRow(this.tableId, key);
  }
}

export const tinyStore = new TinyStore();
