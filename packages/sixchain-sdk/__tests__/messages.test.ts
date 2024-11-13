import { cosmos } from '../src';

it('cosmos', () => {
  const message = cosmos.bank.v1beta1.MessageComposer.fromPartial.send({
    amount: [
      {
        amount: '1',
        denom: 'uatom'
      }
    ],
    fromAddress: 'myaddress',
    toAddress: 'youraddress'
  });
  expect(message).toMatchSnapshot();
});

it('stakingV2', () => {
  const message = cosmos.staking.v2beta1.MessageComposer.fromPartial.delegate({
    amount: {
      amount: '1',
      denom: 'uatom'
    },
    delegatorAddress:"myaddress",
    validatorAddress:"valaddress"
  });
  expect(message).toMatchSnapshot();
});