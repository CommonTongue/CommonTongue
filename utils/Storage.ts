import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeDataToLocalAsync(
  key: string,
  value: string
): Promise<void> {
  try {
    await AsyncStorage.setItem(`@${key}`, value);
  } catch (e) {
    // saving error
    console.log("Error while saving locally");
  }
}

export function storeDataToLocal(key: string, value: string) {
  storeDataToLocalAsync(key, value).then(() => {});
}

export async function readDataFromLocalAsync(
  key: string
): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(`@${key}`);
    return value;
  } catch (e) {
    // error reading value
    return null;
  }
}

export function readDataFromLocal(key: string): string | null {
  readDataFromLocalAsync(key).then((value: string | null) => {
    return value;
  });
  return null;
}
