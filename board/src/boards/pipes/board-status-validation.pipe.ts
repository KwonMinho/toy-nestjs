import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boardsd.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLICK, BoardStatus.PRIVATE];

  transform(value: any) {
    if (!this.isStatusValid(value.toUpperCase)) {
      throw new BadRequestException(`${value} isn't in the staus`);
    }
    return value;
  }

  isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
