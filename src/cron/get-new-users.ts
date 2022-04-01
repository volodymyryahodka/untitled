// @ts-ignore
import cron from 'node-cron';
import { userRepository } from "../repositories/user/userRepository";

export const getNewUsers = async ()=> {
    // @ts-ignore
    cron.schedule('*/10 * * * * *', async () => {
        console.log('START WORK WITH GET NEW USERS');
        // @ts-ignore
        const newUsers = await userRepository.getNewUsers();
    })
}