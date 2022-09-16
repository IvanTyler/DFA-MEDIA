export enum GetDataActionTypesEnum {
    GET_DATA = 'GET_DATA',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
}

export interface GetDataAction {
    type: GetDataActionTypesEnum.GET_DATA;
    payload: any;
}

export interface GetDataErrorAction {
    type: GetDataActionTypesEnum.GET_DATA_ERROR;
    payload: string;
}

export type getDataActionType = GetDataAction | GetDataErrorAction