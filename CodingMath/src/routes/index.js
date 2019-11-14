import React from 'react';
import { Router } from 'dva/router';

// 引入封装的路由表
import routes from './router.config';
import RouterView from './RouterView';

function RouterConfig({ history }) {
  console.log('routes...',routes);
  return (
    <Router history={history}>
      <RouterView routes={routes.routes}/>
      {/* <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/main/addGov" exact component={IndexPage} />
        <Route path="/main/addPro" exact component={IndexPage} />

        <Route path="/abc/def" exact component={IndexPage} />
      </Switch> */}
    </Router>
  );
}

export default RouterConfig;
