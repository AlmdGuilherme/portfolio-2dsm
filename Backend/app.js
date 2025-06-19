require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const supabase = require('./supabaseClient.js');

let allowedOrigins = [
    'https://almdguilherme.github.io',
    'http://localhost:5173'
];

const corsOptions = {
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
});

app.get('/api/habilidades', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('HabilidadesInfos')
            .select('skill_id, rgba, iconClass, skill_name');
        if (error) {
            console.error('Erro ao buscar habilidades do Supabase:', error);
            return res.status(500).json({ error: error.message });
        }
        const habilidadesFormatadas = data.map(item => ({
            id: item.skill_id,
            rgba: item.rgba,
            iconClass: item.iconClass,
            nome: item.skill_name
        }));
        res.status(200).json(habilidadesFormatadas);
    } catch (error) {
        console.error('Erro inesperado na rota /api/habilidades: ', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.get('/api/formacao-academica', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('FormacoesInfos')
            .select('form_id, form_name, local_form, periodo_form, descricao_form');
        if (error) {
            console.error('Erro ao buscar formações acadêmicas do supabase: ', error);
            return res.status(500).json({ error: error.message });
        }
        const formacoesFormatadas = data.map(item => ({
            id: item.form_id,
            nome: item.form_name,
            local: item.local_form,
            periodo: item.periodo_form,
            descricao: item.descricao_form
        }));
        res.status(200).json(formacoesFormatadas);
    } catch (error) {
        console.error('Erro inesperado na rota /api/formacao-academica: ', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.get('/api/certificados', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('CertificadosInfos')
            .select('cert_id, cert_image, cert_type, cert_descricao');
        if (error) {
            console.error('Erro ao buscar informações dos certificados: ', error);
            return res.status(500).json({ error: error.message });
        }
        const certiticadosFormatados = data.map(item => ({
            id: item.cert_id,
            image: item.cert_image,
            tipo: item.cert_type,
            descricao: item.cert_descricao
        }));
        res.status(200).json(certiticadosFormatados);
    } catch (error) {
        console.error('Erro inesperado na rota /api/certificados: ', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.get('/api/projetos', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('ProjetosInfos')
            .select(`
                proj_id,
                proj_situation,
                proj_name,
                proj_image,
                proj_team,
                proj_descricao,
                proj_link,
                TecnologiasProjetos (
                    TecnologiasInfos (
                        tech_id,
                        tech_name,
                        tech_icon
                    )
                )
            `);

        if (error) {
            console.error('Erro ao buscar projetos do Supabase:', error);
            return res.status(500).json({ error: error.message });
        }
        const projetosFormatados = data.map(projeto => ({
            id: projeto.proj_id,
            situation: projeto.proj_situation,
            name: projeto.proj_name,
            image: projeto.proj_image,
            team: projeto.proj_team,
            description: projeto.proj_descricao,
            link: projeto.proj_link,
            technologies: projeto.TecnologiasProjetos.map(tp => ({
                id: tp.TecnologiasInfos.tech_id,
                name: tp.TecnologiasInfos.tech_name,
                icon: tp.TecnologiasInfos.tech_icon
            }))
        }));
        res.status(200).json(projetosFormatados);
    } catch (error) {
        console.error('Erro inesperado na rota /api/projetos:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});