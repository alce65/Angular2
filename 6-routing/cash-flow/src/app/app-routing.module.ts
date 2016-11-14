import { MovimientosComponent } from './../../../../4-injection/cash-flow/src/app/movimientos/movimientos.component';
import { ContactoComponent } from './contacto/contacto.component';
/** fichero para configurar el enrutado de un módulo
 *  en el proyecto inical no se usa
 *  es frecuente hacer la configuración directamente en el módulo raíz 
 */
// importar las herramientas necesarias
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// definir las rutas
const routes: Routes = [
  { path: '', component: MovimientosComponent },
  { path: 'contacto', component: ContactoComponent }
];
// configurar el modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)], // rutas para el módulo raíz
  exports: [RouterModule], // esto es lo que el se verá desde el raíz
  providers: []
})
export class CacsFlowRoutingModule { }
