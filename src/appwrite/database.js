import {TablesDB} from "appwrite";
import client from "./client";

const tableDB = new TablesDB(client)

export default tableDB;