import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client()
  //   .setEndpoint(ENDPOINT!)
  .setEndpoint("https://cloud.appwrite.io/v1")
  //   .setProject(process.env.PROJECT_ID!)
  .setProject("66c106040026dfc07a77")
  //   .setKey(process.env.API_KEY!)
  .setKey(
    "1dc1199092117d475c0ffb9092f1067ebd931ad90ebe12cc034df98f667b33e213070edd2ea53a494520779bc63dd3010d21f28b1f7b0372c0a12797a03804091876888dd288f30ba86d7474fe2fc543e7642caf4abc3010d2fa97c650ae6e4a42fdd4f1c0bd695903d2193944880f997aa6c1dfa31824ef0af104ee62bf92b2"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
