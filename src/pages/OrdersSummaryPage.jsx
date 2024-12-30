import {basePrice} from "../datas";

export default function OrdersSummaryPage() {
    return (<div className="container">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fw-bold">Pizza Sipariş Özeti</div>
                            <div className="badge bg-primary">Toplam: {basePrice.toFixed(2)}₺</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="list-group">
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div>Pizza Adı</div>
                                <div className="text-muted">2 adet</div>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div>Ekstra Malzemeler</div>
                                <div className="text-muted">Peynir, Mısır</div>
                            </div>
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <div>İçecek</div>
                                <div className="text-muted">Kola (Büyük)</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fw-bold">Teslimat Adresi:</div>
                            <div className="text-muted">Kadıköy, İstanbul</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}