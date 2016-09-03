declare module 'coderoad-cli' {

  interface IBuild {
    dir: string;
    filePath: string;
    output?: string;
  }

  export function build(options: IBuild): boolean;

  interface ICreate {
    dir: string;
    name: string;
  }

  export function create(options: ICreate): boolean | Promise<boolean>;

  export function tutorials(dir: string): Tutorial.Info[];

  export function validatePacakgeJson(): Validation.Object;
}
