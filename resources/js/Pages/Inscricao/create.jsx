import React from 'react';
import Form from 'react-bootstrap/Form';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Inscricao() {
    return (
        <InscricaoLayout>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome aqui" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <PrimaryButton className="ml-4" disabled={processing}>
                    Salvar
                </PrimaryButton>
            </Form>
        </InscricaoLayout>
    );
}


