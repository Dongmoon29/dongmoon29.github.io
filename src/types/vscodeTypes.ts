export type VsCodeFolderType = {
  id: string;
  files: VsCodeFileType[];
  foldername: string;
  path: string;
  folders?: VsCodeFolderType[];
  fileType: 'folder';
  isActive: boolean;
};

export type VsCodeFileType = {
  id: string;
  filename: string;
  content: string;
  path: string;
  fileType: 'file';
  isActive: boolean;
};

export type VsCodeFileStorage = VsCodeFileType[];
