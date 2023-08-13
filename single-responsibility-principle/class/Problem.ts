
/**
 * This interface has many unrelated methods and when we implement it we need to implement all of them.
 * If we want to use this class in somewhere, we need to implement all unrelated methods. Even if we don't need them.
 */
interface ISorterTask {
  compareTo(): number;
  sort(collection: []): void;
  doJob(): void;
  run(): void;
}


export class SorterTask implements ISorterTask {
  public compareTo(): number {
    return 0;
  }

  public sort(collection: []): void {
    collection.sort();
  }

  public doJob(): void {
    // do job
  }

  public run(): void {
    // run
  }
}

/**
 * You can see the example here. Even if we can to just sort an array, still we need to implement all unrelated methods.
 */
export function example(): void {
  const sorterTask: ISorterTask = new SorterTask();

  sorterTask.run();
  sorterTask.doJob();
  sorterTask.sort([]);
  sorterTask.compareTo();
}
