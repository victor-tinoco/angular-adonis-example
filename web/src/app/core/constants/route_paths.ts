export class RoutePathModel {
    path: string

    constructor(path: string) {
        this.path = path
    }

    get toRedirect(): string {
        return `/${this.path}`
    }
}

export const RoutePath: { [Key: string]: RoutePathModel } = {
    login: new RoutePathModel(`login`),
    dashboard: new RoutePathModel(`dashboard`),
    account: new RoutePathModel(`account`),
    ocurrence: new RoutePathModel(`ocurrence`),
    webform: new RoutePathModel(`form`),
    ceap: new RoutePathModel(`ceap`),
    user: new RoutePathModel(`user`),

    forgotPassword: new RoutePathModel(`forgot-password`),
    forgotPasswordST1: new RoutePathModel(`forgot-password/step-1`),
    forgotPasswordST2: new RoutePathModel(`forgot-password/step-2`),
    forgotPasswordST3: new RoutePathModel(`forgot-password/step-3`),

    // whenever you update some field route value here, also update the key in the AuxiliaryFields list at field service
    field: new RoutePathModel(`field`),
    commonField: new RoutePathModel(`field`),
    job: new RoutePathModel(`field/job`),
    institution: new RoutePathModel(`field/institution`),
    ocupation: new RoutePathModel(`field/ocupation`),
    religion: new RoutePathModel(`field/religion`),
    nationality: new RoutePathModel(`field/nationality`),
    conduct: new RoutePathModel(`field/conduct`),
    instrument: new RoutePathModel(`field/instrument`),
    crime: new RoutePathModel(`field/crime`),
    natureLesion: new RoutePathModel(`field/nature-lesion`),
    sourceType: new RoutePathModel(`field/source`),
    deponentType: new RoutePathModel(`field/deponent`),
    article: new RoutePathModel(`field/article`),
}
