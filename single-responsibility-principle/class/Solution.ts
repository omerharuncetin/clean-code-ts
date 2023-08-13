/**
 * Interface Segregation Principle
 * By using interface segregation principle, we splitted te ISorterTask interface to 4 different interfaces.
 * Now we have,
 *
 * ISorter for Sort operations.
 * IJob for Job operations.
 * IComparable for Comparable operations.
 * IRunnable for Runnable operations.
 */
interface ISorter {
  sort(collection: []): void;
}

interface IJob {
  doJob(): void;
}

interface IComparable {
  compareTo(): number;
}

interface IRunnable {
  run(): void;
}


export class SorterTask implements ISorter, IJob, IComparable, IRunnable {
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
 * And as a result, in example function you can see that we can use SorterTask class as a ISorter, IJob, IComparable and IRunnable.
 * This leads us to use this class in different places and easily maintain the code.
 */
export function example(): void {
  const sorterInstance: ISorter = new SorterTask();
  sorterInstance.sort([]);

  const jobInstance: IJob = new SorterTask();
  jobInstance.doJob();

  const comparableInstance: IComparable = new SorterTask();
  comparableInstance.compareTo();

  const runnableInstance: IRunnable = new SorterTask();
  runnableInstance.run();

}
