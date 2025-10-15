//@ts-nocheck
import * as _180 from "./abci/types";
import * as _181 from "./crypto/keys";
import * as _182 from "./crypto/proof";
import * as _183 from "./libs/bits/types";
import * as _184 from "./p2p/types";
import * as _185 from "./types/block";
import * as _186 from "./types/evidence";
import * as _187 from "./types/params";
import * as _188 from "./types/types";
import * as _189 from "./types/validator";
import * as _190 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._180
  };
  export const crypto = {
    ..._181,
    ..._182
  };
  export namespace libs {
    export const bits = {
      ..._183
    };
  }
  export const p2p = {
    ..._184
  };
  export const types = {
    ..._185,
    ..._186,
    ..._187,
    ..._188,
    ..._189
  };
  export const version = {
    ..._190
  };
}