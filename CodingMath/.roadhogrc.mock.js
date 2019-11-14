// 引入Mock的数据
import GovList from './mock/gov'

export default {
  // mock机构列表
  'GET /api/main/govList': (req, res)=>{
    console.log('req...', req);
    res.send(GovList)}
};
