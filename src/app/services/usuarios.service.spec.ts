import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuariosService } from './usuarios.service';
import { of } from 'rxjs';

describe('UsuariosService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsuariosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('El servicio retorna un arreglo de usuarios mockeados', (done: DoneFn) => {
    const mockDatos = [
    {"usuario":"Corrine_Jenkins","contrasena":"hbtGPQuXQAoNcOM","admin":true,"canLoad":false,"canActivateChild":true,"id":"1"},
    {"usuario":"Marietta_OKeefe15","contrasena":"vePFITtdMJ2c8eX","admin":true,"canLoad":false,"canActivateChild":false,"id":"2"}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerUsuarios().subscribe((usuarios) => {
      const mockDatos2 = [
        {"usuario":"Brittany56","contrasena":"8515KC9D7p388sb","admin":false,"canLoad":false,"canActivateChild":true,"id":"3"},
        {"usuario":"Rigoberto.Rau","contrasena":"nZdQIjbRWGYkmKk","admin":false,"canLoad":true,"canActivateChild":true,"id":"4"}
      ];
      expect(usuarios).toEqual(mockDatos2);
      done();
    })
  })
});