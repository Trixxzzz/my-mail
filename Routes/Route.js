import express from 'express';
import { getEmails, saveSentEmails ,moveEmailsToBin,toggleStarredEmails,deleteEmails} from '../Controllers/email-controller.js';

const routes=express.Router();

routes.post('/save',saveSentEmails)
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveSentEmails)
routes.post('/bin',moveEmailsToBin);
routes.post('/starred',toggleStarredEmails)
routes.delete('/delete',deleteEmails);

export default routes