'use client';

import { FC } from 'react';
import { OsxWindowHeader } from '../../os/macOs/osxWindowHeader';
import { useVscodeContext } from '@/context/VscodeContext';
import { VsCodeBuffers } from './vscodeBuffers';
import { VsCodeEditorArea } from './vscodeEditorArea';
import { VscodeSidebar } from './sidebar/vscodeSidebar';
import { useOsContext } from '@/context/OsContext';
import Image from 'next/image';
import { useThemeContext } from '@/context/ThemeContext';
import { WindowHeader } from '@/components/os/windowOs/windowHeader';

const VsCodeComponent: FC = () => {
  const { state } = useVscodeContext();
  const { os } = useOsContext();
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex flex-col overflow-auto ${
        theme === 'dark' ? 'text-white' : 'text-black'
      } rounded-t-xl h-full w-full rounded-b-xl`}>
      {os === 'MacOs' ? (
        <OsxWindowHeader title="editor" />
      ) : (
        <WindowHeader
          title="editor"
          icon={
            <Image
              src={'/svgs/vscode.svg'}
              width={16}
              height={16}
              priority
              alt="vscode"
            />
          }
        />
      )}
      <div className="flex flex-col overflow-hidden h-full w-full text-xs md:text-sm">
        <div className="flex flex-1 min-h-0">
          <VscodeSidebar />
          <div
            className={`flex flex-col flex-1 w-full ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
            }`}>
            <VsCodeBuffers />
            <VsCodeEditorArea content={state.currentFile?.content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VsCodeComponent;
