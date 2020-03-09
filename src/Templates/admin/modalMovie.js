import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/index';
import * as actionsMovie from '../../Redux/Actions/movieAction';


const signupUserSchema = yup.object().shape({
    maPhim: yup.number(),
    tenPhim: yup.string().required('* Field is required!'),
    biDanh: yup.string().required('* Field is required!'),
    trailer: yup.string().required('* Field is required!'),
    hinhAnh: yup.string().required('* Field is required!'),
    moTa: yup.string().required('* Field is required!'),
    maNhom: yup.string().required('* Field is required!'),
    ngayKhoiChieu: yup.string().required('* Field is required!'),
    danhGia: yup.number()
})

class ModalMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maPhim: '',
            tenPhim: '',
            biDanh: '',
            trailer: '',
            hinhAnh: '',
            moTa: '',
            maNhom: 'GP07',
            ngayKhoiChieu: '',
            danhGia: '5',
            // fileselected: ''
        }
    }

    componentWillReceiveProps(nextprops) {
        // console.log(nextprops);
        if (nextprops && nextprops.infoModal.editMovie) {
            let { maPhim, tenPhim, biDanh, trailer, hinhAnh, moTa, maNhom, ngayKhoiChieu, danhGia } = nextprops.infoModal.movieEditing;
            let day = new Date(ngayKhoiChieu);
            // new Intl.DateTimeFormat('en-GB').format(day)
            this.setState({
                maPhim,
                tenPhim,
                biDanh,
                trailer,
                hinhAnh,
                moTa,
                maNhom,
                ngayKhoiChieu: '',
                danhGia
            })
        } else if (nextprops && nextprops.infoModal.addMovie) {
            this.setState({
                maPhim: '',
                tenPhim: '',
                biDanh: '',
                trailer: '',
                hinhAnh: '',
                moTa: '',
                maNhom: 'GP07',
                ngayKhoiChieu: '20/02/2020',
                danhGia: '5'
            })
        }

    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value,
            // fileselected: event.target.files
        }, () => {
            // console.log(this.state.fileselected[0]);

        })
    }

    handleChangeFile = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            hinhAnh: event.target.files[0]
        })
    }

    onSubmit = (event) => {
        // console.log(this.state);
        event.preventDefault();


        if (this.props.infoModal.addMovie) {
            this.props.addMovie(this.state);
        } else {
            this.props.updateMovie(this.state)
        }
        this.props.getListMovieAll();
    }

    render() {
        let { infoModal } = this.props;
        // console.log(infoModal.movieEditing);

        return (
            <div>
                <div className="modal fade" id="modalMovie">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{infoModal.addMovie ? 'Thêm phim' : infoModal.editMovie ? 'Sửa phim' : ''}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">

                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Mã Phim</label>
                                        <input type="text" className="form-control" value={this.state.maPhim} name="maPhim" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Tên Phim</label>
                                        <input type="text" className="form-control" value={this.state.tenPhim} name="tenPhim" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Bí Danh</label>
                                        <input type="text" className="form-control" name="biDanh" value={this.state.biDanh} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Trailer</label>
                                        <input type="text" className="form-control" name="trailer" value={this.state.trailer} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Hình Ảnh</label>
                                        <input type="file" className="form-control" name="hinhAnh" onChange={this.handleChangeFile} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mô Tả</label>
                                        <input type="text" className="form-control" name="moTa" value={this.state.moTa} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Ngày Khởi Chiếu</label>
                                        <input type="text" className="form-control" name="ngayKhoiChieu" value={this.state.ngayKhoiChieu} onChange={this.handleChange} placeholder='dd/mm/yy' />
                                    </div>
                                    <div className="form-group">
                                        <label>Đánh Giá</label>
                                        <select className="form-control" name="danhGia" value={this.state.danhGia} onChange={this.handleChange}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Mã Nhóm</label>
                                        <select className="form-control" name="maNhom" value={this.state.maNhom} onChange={this.handleChange}>
                                            <option>GP01</option>
                                            <option>GP02</option>
                                            <option>GP03</option>
                                            <option>GP04</option>
                                            <option>GP05</option>
                                            <option>GP06</option>
                                            <option>GP07</option>
                                            <option>GP08</option>
                                            <option>GP09</option>
                                            <option>GP10</option>
                                        </select>
                                    </div>
                                    <button type="button" className="btn btn-secondary float-right" data-dismiss="modal">Hủy</button>
                                    <button type="submit" className="btn btn-success float-right mr-2">
                                        {infoModal.addMovie ? 'Thêm phim' : 'Sửa'}
                                    </button>
                                </form>
                                {/* <Formik
                                    initialValues={{
                                        maPhim: infoModal.movieEditing ? infoModal.movieEditing.maPhim: this.state.maPhim,
                                        tenPhim: '',
                                        biDanh: '',
                                        trailer: '',
                                        hinhAnh: '',
                                        moTa: '',
                                        maNhom: 'GP07',
                                        ngayKhoiChieu: '',
                                        danhGia: 1
                                    }}
                                    onSubmit={this.handleSubmit}
                                    validationSchema={signupUserSchema}
                                    render={(formikProps) => (
                                        <Form>
                                            <div className="form-group">
                                                <label>Mã phim</label>
                                                <Field type="text" className="form-control" name='maPhim' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="maPhim" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Tên phim</label>
                                                <Field type="text" className="form-control" name='tenPhim' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="tenPhim" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Bí danh</label>
                                                <Field type="text" className="form-control" name='biDanh' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="biDanh" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Trailer</label>
                                                <Field type="text" className="form-control" name='trailer' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="trailer" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Hình ảnh</label>
                                                <Field type="text" className="form-control" name='hinhAnh' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="hinhAnh" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Mô tả</label>
                                                <Field type="text" className="form-control" name='moTa' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="moTa" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Ngày khởi chiếu</label>
                                                <Field type="text" className="form-control" name='ngayKhoiChieu' onChange={formikProps.handleChange} />
                                                <ErrorMessage name="ngayKhoiChieu" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Đánh giá</label>
                                                <Field component="select" className="form-control" name='danhGia' onChange={formikProps.handleChange}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Field>
                                                <ErrorMessage name="danhGia" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <div className="form-group">
                                                <label>Mã nhóm</label>
                                                <Field component="select" className="form-control" name='maNhom' onChange={formikProps.handleChange}>
                                                    <option>GP01</option>
                                                    <option>GP02</option>
                                                    <option>GP03</option>
                                                    <option>GP04</option>
                                                    <option>GP05</option>
                                                    <option>GP06</option>
                                                    <option>GP07</option>
                                                    <option>GP08</option>
                                                    <option>GP09</option>
                                                    <option>GP10</option>
                                                </Field>
                                                <ErrorMessage name="maNhom" >
                                                    {msg => <div className="alert alert-danger">{msg}</div>}
                                                </ErrorMessage>
                                            </div>
                                            <button type="button" className="float-right btn btn-danger ml-2" data-dismiss="modal">Hủy</button>
                                            <button type="submit" className="float-right btn btn-success">
                                                {
                                                    infoModal.addMovie || infoModal.addUser? 'Thêm':'Sửa'
                                                }
                                            </button>
                                        </Form>
                                    )}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieEditing: state.movieReducer.movieEditing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMovie: (movie) => {
            dispatch(actionsMovie.addMovie(movie));
        },
        getListMovieAll: () => {
            dispatch(actions.actGetListMovie())
        },
        updateMovie: (movie) => {
            dispatch(actionsMovie.updateMovie(movie))
        },
        uploadImg: (data) => {
            dispatch(actionsMovie.uploadImg(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalMovie);