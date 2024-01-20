export default async function getImageFromUpload(file: {
  originFileObj: { type: string };
  url: string;
  name: string;
}): Promise<[file: Blob, fileName: string] | undefined> {
  if (file?.originFileObj) {
    return new Promise((resolve, reject) => {
      console.log(file);

      const reader = new FileReader();
      reader.readAsArrayBuffer(file.originFileObj as Blob);
      reader.onload = () => {
        const blob = new Blob([reader.result] as BlobPart[], {
          type: file.originFileObj.type,
        });
        resolve([blob, file.name]);
      };
      reader.onerror = (error) => reject(error);
    });
  } else {
    return undefined;
  }
}

export const setImageToUpload = async (file: {
  url: string;
  ororiginFileObj?: any;
}) => {
  const actualFile = (await fetch(file.url)).blob();
  file.ororiginFileObj = actualFile;
  return actualFile;
};
