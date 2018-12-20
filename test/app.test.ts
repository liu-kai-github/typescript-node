import app from '../src/app';

describe('测试 app 返回', () => {
    it('app 返回值 应为字符串 app', () => {
        expect(app()).toBe('app');
    });
});
