function sleep() {
  return new Promise((resolve, reject) => setTimeout(resolve, 500));
}

describe('github ci test', () => {
  it('async', async () => {
    await sleep();
    console.log(1);
    expect(1 + 1).toEqual(2);
  });
});
