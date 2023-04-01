import { LogLevel } from '../../enums/logger.enum';
import { Logger } from '../logger.util';
import { LoggerReturnMock } from './utils.mock';

describe('Logger', () => {
  it('should return log info', () => {
    expect(
      Logger({
        level: LogLevel.INFO,
        message: 'teste',
      }),
    ).toEqual(LoggerReturnMock);
  });
});
