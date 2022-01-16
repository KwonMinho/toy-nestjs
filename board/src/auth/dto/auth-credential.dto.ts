import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(12)
  username: string;

  //이 조건 체크는 컨트롤러에서 파라미터 파이프(ValidationPipe)를 넣어줘야한다.
  @IsString()
  @MinLength(4)
  @MaxLength(12)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string;
}
