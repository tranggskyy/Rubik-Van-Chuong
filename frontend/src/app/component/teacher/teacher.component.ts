import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { ModalService } from 'src/app/service/modal.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  isModalOpen = false;
  modalData: any;

  teachers: any[] = [];
  paging: any = {};
  page = 1;
  name: string = '';
  keySearch: string = '';
  status = '';

  constructor(
    private alertSrv: AlertService,
    private userSrv: UserService,
    private router: Router,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    let option = { roleId: 2, sortDir: 'desc', page: this.page, userName: this.keySearch, status: this.status };
    this.userSrv.getAllTeacher(option, (res: any) => {
      this.teachers = res.elements;
      this.paging = res.paging;
    })
  }

  selectAll(event: any): void {
    const checked = event.target.checked;
    this.teachers.forEach(teacher => teacher.selected = checked);
  }

  refreshData() {
    this.getAllData();
    this.alertSrv.showSuccess('Tải lại danh sách thành công', 'Thành công!');
  }
  onSearch() {
    this.keySearch = this.name;
    this.getAllData();
  }
  nextPage() {
    if (this.paging.page == this.paging.totalPage) {
      this.alertSrv.showError('Không thể mở page tiếp theo', 'Lỗi!')
    } else {
      this.page++;
      this.getAllData();
    }
  }

  previousPage() {
    if (this.paging.page == 1) {
      this.alertSrv.showError('Không thể mở page trước đó', 'Lỗi!')
    } else {
      this.page--;
      this.getAllData();
    }
  }

  openModal(record?: any) {
    if (record) {
      this.modalData = {
        record: record,
        title: 'Chỉnh sửa thông tin',
        type: 'UPDATE'
      };
    } else {
      this.modalData = {
        title: 'Thêm giáo viên mới',
        type: 'CREATE'
      };
    }

    this.isModalOpen = true;
  }

  onCloseModal() {
    this.isModalOpen = false;
    this.getAllData();
  }

  onDetail(id: any) {
    this.router.navigate(['/teacher/detail/', id]);
  }

  deleteRecord(id: any) {
    this.userSrv.deleteDetail(id,
      (res: any) => {
        if (res) {
          this.alertSrv.showSuccess('Xóa thành công dữ liệu', 'Thành công!');
          this.onCloseModal();
        }
      },
    )
  }

  showContact(info: string) {
    this.modalService.updateStatusModal(true, info);
  }
  
  changeStatusTeacher(e: any){
    switch(e.target.value){
      case 'all':{
        this.status = '';
        this.getAllData();
        break;
      };
      case '1':{
        this.status = '1';
        this.getAllData();
        break;
      };
      case '0':{
        this.status = '0';
        this.getAllData();
        break;
      }
    }
  }
}
