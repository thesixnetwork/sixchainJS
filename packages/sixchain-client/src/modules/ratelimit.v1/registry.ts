import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAddRateLimit } from "./types/ratelimit/v1/tx";
import { MsgUpdateRateLimit } from "./types/ratelimit/v1/tx";
import { MsgRemoveRateLimit } from "./types/ratelimit/v1/tx";
import { MsgResetRateLimit } from "./types/ratelimit/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ratelimit.v1.MsgAddRateLimit", MsgAddRateLimit],
    ["/ratelimit.v1.MsgUpdateRateLimit", MsgUpdateRateLimit],
    ["/ratelimit.v1.MsgRemoveRateLimit", MsgRemoveRateLimit],
    ["/ratelimit.v1.MsgResetRateLimit", MsgResetRateLimit],
    
];

export { msgTypes }