import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(1)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  // name: sample([
  //   "80/100",
  //   "90/100"
  // ]),
  company: sample([
    "SSC",
  ]),
  isVerified:sample([
    90,
  ]),
  status: sample(['passed']),
  role: sample([
    "90/100"
  ])
}));

export default users;
