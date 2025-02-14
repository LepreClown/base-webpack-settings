import webpack from "webpack"
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildPaths, BuildPlatform} from "./config/build/types/types";
import path from "path";

interface EnvVariables {
  mode?: BuildMode;
  port: number;
  analyzer?: boolean
  platform?: BuildPlatform
}

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  }

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? BuildMode.DEVELOPMENT,
    port: env.port ?? 3500,
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? BuildPlatform.DESKTOP
  })

  return config
}