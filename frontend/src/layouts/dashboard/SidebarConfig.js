// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: getIcon('eva:people-fill')
  // },
  // {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: getIcon('eva:shopping-bag-fill')
  // },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill')
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill')
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // },
  {
    title: 'add student',
    path: '/dashboard/addStudent',
    icon: getIcon('eva:person-add-fill')
  },
  {
    title: 'add marksheet',
    path: '/dashboard/addMarksheet',
    icon: getIcon('ant-design:file-add-filled')
  },
  {
    title: 'add marks',
    path: '/dashboard/addMarks',
    icon: getIcon('carbon:add-filled')
  },
  {
    title: 'view marksheet',
    path: '/dashboard/viewMarksheet',
    icon: getIcon('eva:file-text-fill')
  },
  // {
  //   title: 'list marksheet',
  //   path: '/dashboard/listMarksheet',
  //   icon: getIcon('eva:person-add-fill')
  // },
  // {
  //   title: 'view marks',
  //   path: '/dashboard/viewMarksTable',
  //   icon: getIcon('eva:person-add-fill')
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
