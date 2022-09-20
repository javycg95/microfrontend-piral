import { PiletApi } from '../piral-example-shell/dist/emulator/piral-example-shell-1.0.0.tgz';
import * as Blazor from './blazor.codegen';
import './MicrofrontendPiral.BlazorExample.styles.css';

export function setup(app: PiletApi) {
    Blazor.registerDependencies(app);
    Blazor.registerOptions(app);
    Blazor.registerPages(app);
    Blazor.registerExtensions(app);
    Blazor.setupPilet(app);
}
