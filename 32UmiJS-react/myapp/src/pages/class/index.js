import styles from './index.css';
import { List } from 'antd-mobile';
import { connect } from 'dva';

function Nav({ dispatch, search, ...props }) {
  console.log(props, search);
  const { text } = search;
  // 同步调用
  // const handleClick = () => {
  //   dispatch({
  //     type: 'search/getList',
  //     payload: 'xiaopohai',
  //   });
  // };
  // 调用异步方法
  const handleClick = () => {
    dispatch({
      type: 'search/getListAsync',
      payload: 'xiaopohai',
    });
  };
  return (
    <div className={styles.normal}>
      <h1 onClick={handleClick}>Page index</h1>
      <List>
        <List.Item>{text}</List.Item>
        <List.Item>ttt</List.Item>
      </List>
    </div>
  );
}

export default connect(({ search, common }) => ({ search, common }))(Nav);
