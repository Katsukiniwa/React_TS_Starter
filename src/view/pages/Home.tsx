import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

export const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>About</h1>
      <AlertDialog
        isOpen={open}
        onClose={() => { setOpen(false); }}
        leastDestructiveRef={undefined}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>ダイアログ</AlertDialogHeader>
            <AlertDialogBody>ダイアログの本文で〜〜〜す！</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={() => { setOpen(false); }}>閉じる</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};
