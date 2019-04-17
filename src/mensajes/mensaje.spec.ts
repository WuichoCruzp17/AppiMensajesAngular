import { Mensaje } from './DTO/entities/mensaje.entity';

describe('Mensaje', () => {
  it('should be defined', () => {
    expect(new Mensaje()).toBeDefined();
  });
});
