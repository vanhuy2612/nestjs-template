import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { CommonModule } from "modules/common-module/common.module";
import { WSModule } from "modules/ws-module/ws.module";
import { join } from "path";

@Module({
  imports: [
    CommonModule,
    WSModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"), // <-- path to the static files
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
