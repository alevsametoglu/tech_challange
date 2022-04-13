import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import { firebaseApp } from "./firebase";

const saveHeroList = (list) => {
  try {
    const db = getFirestore(firebaseApp);
    return setDoc(doc(db, "tech_challenge", "hero-list"), { list });
  } catch (error) {
    console.log({ error });
  }
};

const getHeroList = async () => {
  try {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, "tech_challenge", "hero-list");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.list;
    } else {
      return [];
    }
  } catch (error) {
    console.log({ error });
  }
};

export const dbAPI = { saveHeroList, getHeroList };
