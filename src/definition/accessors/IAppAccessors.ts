import { IEnvironmentRead, IHttp, IMail, IRead } from '../../definition/accessors';
import { IApiEndpointMetadata } from '../api';

export interface IAppAccessors {
    readonly environmentReader: IEnvironmentRead;
    readonly reader: IRead;
    readonly http: IHttp;
    readonly mail: IMail;
    readonly providedApiEndpoints: Array<IApiEndpointMetadata>;
}
