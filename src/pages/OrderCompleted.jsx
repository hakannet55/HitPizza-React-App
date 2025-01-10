import React from 'react';

const OrderConfirmation = ({orderNumber, customerName}) => {
    return (
        <div style={styles.container}>
            <h1>Sipariş Alındı!</h1>
            <p>Teşekkürler, {customerName}!</p>
            <p>Sipariş Numaranız: {orderNumber}</p>
            <p>Siparişiniz başarıyla alındı ve en kısa sürede işleme alınacaktır.</p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: '50px auto',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
};

export default OrderConfirmation;
