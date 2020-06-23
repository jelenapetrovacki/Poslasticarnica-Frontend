import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Dobavljac } from './dobavljac.model';
import { DobavljaciService } from './dobavljaci.service';


@Component({
  selector: 'app-dobavljaci',
  templateUrl: './dobavljaci.component.html',
  styleUrls: ['./dobavljaci.component.css']
})
export class DobavljaciComponent implements OnInit {

  displayedColumns = ['idDobavljac', 'nazivDobavljaca', 'kontaktDobavljaca'];
  dataSource: MatTableDataSource<Dobavljac>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dobavljaci: Dobavljac[];
  constructor(private dobavljacService: DobavljaciService) {

  }
  ngOnInit(): void {
    this.dobavljacService.getDobavljaci().subscribe(dobavljaci => {
      this.dobavljaci = dobavljaci;
      this.dataSource = new MatTableDataSource(this.dobavljaci);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });


  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }



}


