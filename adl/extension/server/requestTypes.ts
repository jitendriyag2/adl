import { RequestType } from 'vscode-languageserver';

export interface ReadFileParams {
  path: string;
}

export namespace ReadFileRequest {
 export const type = new RequestType<ReadFileParams,string, void, void>('adl/readFile');
}

export interface WriteFileParams {
  path: string;
  data: string;
}

export namespace WriteFileRequest {
  export const type = new RequestType<WriteFileParams, void, void, void>('adl/writeFile');
}

export interface IsDirectoryParams {
  path: string;
}

export namespace IsDirectoryRequest {
  export const type = new RequestType<IsDirectoryParams, boolean, void, void>('adl/isDirectory');
}

export interface IsFileParams {
  path: string;
}

export namespace IsFileRequest {
  export const type = new RequestType<IsFileParams, boolean, void, void>('adl/isFile');
}

export interface ReadDirectoryParams {
  path: string;
}

export namespace ReadDirectoryRequest {
  export const type = new RequestType<IsDirectoryParams, Array<string>, void, void>('adl/readDirectory');
}

export interface OpenLinkParams {
  url: string;
}

export namespace OpenLinkRequest {
  export const type = new RequestType<OpenLinkParams, void, void, void>('adl/openlink');
}

