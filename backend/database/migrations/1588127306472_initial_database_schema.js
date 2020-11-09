'use strict'

const Schema = use('Schema')

class InitialDatabaseSchema extends Schema {
  up () {
    this.raw(`
    --HABILITAÇÃO DO POSTGIS
    CREATE EXTENSION postgis;
    --
    --
    --CRIAÇÃO DAS TABELAS DO BANCO BD 09
    --
    CREATE TABLE public.vitima(
      id_vitima SERIAL,
      id_ocorrencia integer NOT NULL,
      tipo_vitima text NOT NULL,
      tutela_estado boolean,
      pcd boolean,
      nome text,
      idade integer,
      cor_raca text,
      ocupacao text,
      escolaridade text,
      genero text,
      orientacao_sexual text,
      religiao_credo text,
      nacionalidade text,
      obs_vitima text,
      login_inclusao integer,
      created_at timestamp,
      login_alteracao integer,
      updated_at timestamp,
      CONSTRAINT id_vitima_pk PRIMARY KEY("id_vitima")
    );
    CREATE TABLE public.ocupacao(
      id_ocupacao SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_ocupacao_pk PRIMARY KEY("id_ocupacao")
    );
    CREATE TABLE public.religiao_credo(
      id_religiao_credo SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_religiao_credo_pk PRIMARY KEY("id_religiao_credo")
    );
    CREATE TABLE public.nacionalidade(
      id_nacionalidade SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_nacionalidade_pk PRIMARY KEY("id_nacionalidade")
    );
    CREATE TABLE public.vitima_lesao(
      id_vitima integer NOT NULL,
      id_lesao integer NOT NULL
    );
    CREATE TABLE public.ocorrencia(
      id_ocorrencia SERIAL,
      id_ceap integer NOT NULL,
      id_geografia integer NOT NULL,
      o_status text NOT NULL, --inica com status 'incluido'
      importante boolean NOT NULL, --inicia com 0 (nao importante)
      data_ocorrencia timestamp NOT NULL,
      periodo_dia text,
      obs_ocorrencia text,
      curado_por integer,
      obs_curadoria text,
      login_inclusao integer,
      created_at timestamp,
      login_alteracao integer,
      updated_at timestamp,
      CONSTRAINT id_ocorrencia_pk PRIMARY KEY("id_ocorrencia")
    );
    CREATE TABLE public.fonte(
      id_fonte SERIAL,
      id_ocorrencia integer NOT NULL,
      fonte_tipo text NOT NULL,
      data_fonte timestamp NOT NULL,
      titulo_fonte text NOT NULL,
      acesso_fonte text,
      audiovisual_tipo text,
      acesso_audiovisual text,
      obs_fonte text,
      login_inclusao integer,
      created_at timestamp,
      login_alteracao integer,
      updated_at timestamp,
      CONSTRAINT id_fonte_pk PRIMARY KEY("id_fonte")
    );
    CREATE TABLE public.fonte_tipo(
      id_fonte_tipo SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_fonte_tipo_pk PRIMARY KEY("id_fonte_tipo")
    );
    CREATE TABLE public.depoimento(
      id_depoimento SERIAL,
      id_fonte integer NOT NULL,
      tipo_depoente text NOT NULL,
      nome text,
      depoimento text NOT NULL,
      obs_depoimento text,
      login_inclusao integer,
      created_at timestamp,
      login_alteracao integer,
      updated_at timestamp,
      CONSTRAINT id_depoimento_pk PRIMARY KEY("id_depoimento")
    );
    CREATE TABLE public.tipo_depoente(
      id_tipo_depoente SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_tipo_depoente_pk PRIMARY KEY("id_tipo_depoente")
    );
    CREATE TABLE public.depoimento_lesao(
      id_depoimento integer NOT NULL,
      id_lesao integer NOT NULL
    );
    CREATE TABLE public.lesao(
      id_lesao SERIAL,
      id_ocorrencia integer NOT NULL,
      tipo_lesao text,
      id_meio_instrumento integer,
      id_tipo_crime integer,
      id_dh_artigo integer,
      conduta text NOT NULL,
      justificativa_conduta text,
      lesao_corpo text,
      obs_lesao text,
      login_inclusao integer,
      created_at timestamp,
      login_alteracao integer,
      updated_at timestamp,
      CONSTRAINT id_lesao_pk PRIMARY KEY("id_lesao")
    );
    CREATE TABLE public.conduta(
      id_conduta SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_conduta_pk PRIMARY KEY("id_conduta")
    );
    CREATE TABLE public.meio_instrumento(
      id_meio_instrumento SERIAL,
      nome text NOT NULL,
      equip_oficial boolean NOT NULL, --inicia com 0 (equipamento nao-oficial)
      obs_meio_instru text,
      CONSTRAINT id_meio_instrumento_pk PRIMARY KEY("id_meio_instrumento")
    );
    CREATE TABLE public.tipo_crime(
      id_tipo_crime SERIAL,
      id_natureza_lesao integer NOT NULL,
      nome text NOT NULL,
      artigo text,
      descricao text,
      CONSTRAINT id_tipo_crime_pk PRIMARY KEY("id_tipo_crime")
    );
    CREATE TABLE public.natureza_lesao(
      id_natureza_lesao SERIAL,
      nome text NOT NULL,
      descricao text,
      CONSTRAINT id_natureza_lesao_pk PRIMARY KEY("id_natureza_lesao")
    );
    CREATE TABLE public.dh_artigo(
      id_dh_artigo SERIAL,
      nome text NOT NULL,
      descricao text,
      bloco_dh_artigo text,
      CONSTRAINT id_dh_artigo_pk PRIMARY KEY("id_dh_artigo")
    );
    CREATE TABLE public.geografia(
      id_geografia SERIAL,
      id_municipio integer NOT NULL,
      endereco text,
      logradouro_sede text,
      geolocalizacao geography(Point,4326),
      latitude float,
      longitude float,
      CONSTRAINT id_geografia_pk PRIMARY KEY("id_geografia")
    );
    CREATE TABLE public.localizacao_municipio(
      id_municipio integer NOT NULL,
      id_uf text NOT NULL,
      municipio text NOT NULL,
      CONSTRAINT id_municipio_pk PRIMARY KEY("id_municipio")
    );
    CREATE TABLE public.localizacao_uf(
      id_uf text NOT NULL,
      uf text NOT NULL,
      CONSTRAINT id_uf_pk PRIMARY KEY("id_uf")
    );
    CREATE TABLE public.autor(
      id_autor SERIAL,
      id_ocorrencia integer NOT NULL,
      instituicao text NOT NULL,
      area_instituicao text,
      cargo_funcao text,
      em_servico boolean NOT NULL, --inicia com 0 (fora de servico)
      obs_autor text,
      login_inclusao integer,
      created_at timestamp,
      login_alteracao integer,
      updated_at timestamp,
      CONSTRAINT id_autor_pk PRIMARY KEY("id_autor")
    );
    CREATE TABLE public.instituicao(
      id_instituicao SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_instituicao_pk PRIMARY KEY("id_instituicao")
    );
    CREATE TABLE public.cargo_funcao(
      id_cargo_funcao SERIAL,
      nome text NOT NULL,
      CONSTRAINT id_cargo_funcao_pk PRIMARY KEY("id_cargo_funcao")
    );
    CREATE TABLE public.autor_lesao(
      id_autor integer NOT NULL,
      id_lesao integer NOT NULL
    );
    --
    --TABELAS DE SISTEMA
    --
    CREATE TABLE public.ceap(
      id_ceap SERIAL,
      nome text NOT NULL,
      responsavel text,
      telefone text,
      email text,
      uf text,
      municipio text,
      bairro text,
      logradouro text,
      numero text,
      complemento text,
      cep text,
      CONSTRAINT id_ceap_pk PRIMARY KEY("id_ceap")
    );
    CREATE TABLE public.user(
      id SERIAL,
      active boolean NOT NULL, --inicia com 1 (ativo)
      username text UNIQUE NOT NULL,
      id_group integer NOT NULL,
      id_ceap integer NOT NULL,
      password text NOT NULL,
      name text NOT NULL,
      email text UNIQUE NOT NULL,
      reset_password_token text,
      token_created_at timestamp,
      created_at timestamp,
      updated_at timestamp,
      CONSTRAINT id_pk PRIMARY KEY("id")
    );
    CREATE TABLE public.token(
      id_token SERIAL,
      id_user integer,
      token text,
      type text,
      is_revoked boolean,
      created_at timestamp,
      updated_at timestamp,
      CONSTRAINT id_token_pk PRIMARY KEY("id_token")
    );
    CREATE TABLE public.group(
      id_group SERIAL,
      title text,
      description text,
      created_at timestamp,
      updated_at timestamp,
      CONSTRAINT id_group_pk PRIMARY KEY("id_group")
    );
    --
    --RELACIONAMENTOS DAS TABELAS DO BANCO
    --
    ALTER TABLE public.vitima ADD CONSTRAINT vitima_fk0 FOREIGN KEY (id_ocorrencia) REFERENCES public.ocorrencia (id_ocorrencia);
    ALTER TABLE public.vitima ADD CONSTRAINT vitima_fk1 FOREIGN KEY (login_inclusao) REFERENCES public.user (id);
    ALTER TABLE public.vitima ADD CONSTRAINT vitima_fk2 FOREIGN KEY (login_alteracao) REFERENCES public.user (id);
    ALTER TABLE public.vitima_lesao ADD CONSTRAINT vitima_lesao_fk0 FOREIGN KEY (id_vitima) REFERENCES public.vitima (id_vitima);
    ALTER TABLE public.vitima_lesao ADD CONSTRAINT vitima_lesao_fk1 FOREIGN KEY (id_lesao) REFERENCES public.lesao (id_lesao);
    ALTER TABLE public.ocorrencia ADD CONSTRAINT ocorrencia_fk0 FOREIGN KEY (id_ceap) REFERENCES public.ceap (id_ceap);
    ALTER TABLE public.ocorrencia ADD CONSTRAINT ocorrencia_fk1 FOREIGN KEY (id_geografia) REFERENCES public.geografia (id_geografia);
    ALTER TABLE public.ocorrencia ADD CONSTRAINT ocorrencia_fk2 FOREIGN KEY (login_inclusao) REFERENCES public.user (id);
    ALTER TABLE public.ocorrencia ADD CONSTRAINT ocorrencia_fk3 FOREIGN KEY (login_alteracao) REFERENCES public.user (id);
    ALTER TABLE public.ocorrencia ADD CONSTRAINT ocorrencia_fk4 FOREIGN KEY (curado_por) REFERENCES public.user (id);
    ALTER TABLE public.fonte ADD CONSTRAINT fonte_fk0 FOREIGN KEY (id_ocorrencia) REFERENCES public.ocorrencia (id_ocorrencia);
    ALTER TABLE public.fonte ADD CONSTRAINT fonte_fk1 FOREIGN KEY (login_inclusao) REFERENCES public.user (id);
    ALTER TABLE public.fonte ADD CONSTRAINT fonte_fk2 FOREIGN KEY (login_alteracao) REFERENCES public.user (id);
    ALTER TABLE public.depoimento ADD CONSTRAINT depoimento_fk0 FOREIGN KEY (id_fonte) REFERENCES public.fonte (id_fonte);
    ALTER TABLE public.depoimento ADD CONSTRAINT depoimento_fk1 FOREIGN KEY (login_inclusao) REFERENCES public.user (id);
    ALTER TABLE public.depoimento ADD CONSTRAINT depoimento_fk2 FOREIGN KEY (login_alteracao) REFERENCES public.user (id);
    ALTER TABLE public.depoimento_lesao ADD CONSTRAINT depoimento_lesao_fk0 FOREIGN KEY (id_depoimento) REFERENCES public.depoimento (id_depoimento);
    ALTER TABLE public.depoimento_lesao ADD CONSTRAINT depoimento_lesao_fk1 FOREIGN KEY (id_lesao) REFERENCES public.lesao (id_lesao);
    ALTER TABLE public.lesao ADD CONSTRAINT lesao_fk0 FOREIGN KEY (id_ocorrencia) REFERENCES public.ocorrencia (id_ocorrencia);
    ALTER TABLE public.lesao ADD CONSTRAINT lesao_fk1 FOREIGN KEY (id_tipo_crime) REFERENCES public.tipo_crime (id_tipo_crime);
    ALTER TABLE public.lesao ADD CONSTRAINT lesao_fk2 FOREIGN KEY (id_dh_artigo) REFERENCES public.dh_artigo (id_dh_artigo);
    ALTER TABLE public.lesao ADD CONSTRAINT lesao_fk3 FOREIGN KEY (login_inclusao) REFERENCES public.user (id);
    ALTER TABLE public.lesao ADD CONSTRAINT lesao_fk4 FOREIGN KEY (login_alteracao) REFERENCES public.user (id);
    ALTER TABLE public.lesao ADD CONSTRAINT lesao_fk5 FOREIGN KEY (id_meio_instrumento ) REFERENCES public.meio_instrumento (id_meio_instrumento );
    ALTER TABLE public.tipo_crime ADD CONSTRAINT tipo_crime_fk0 FOREIGN KEY (id_natureza_lesao) REFERENCES public.natureza_lesao (id_natureza_lesao);
    ALTER TABLE public.geografia ADD CONSTRAINT geografia_fk0 FOREIGN KEY (id_municipio) REFERENCES public.localizacao_municipio (id_municipio);
    ALTER TABLE public.localizacao_municipio ADD CONSTRAINT localizacao_municipio_fk0 FOREIGN KEY (id_uf) REFERENCES public.localizacao_uf (id_uf);
    ALTER TABLE public.autor ADD CONSTRAINT autor_fk0 FOREIGN KEY (id_ocorrencia) REFERENCES public.ocorrencia (id_ocorrencia);
    ALTER TABLE public.autor ADD CONSTRAINT autor_fk1 FOREIGN KEY (login_inclusao) REFERENCES public.user (id);
    ALTER TABLE public.autor ADD CONSTRAINT autor_fk2 FOREIGN KEY (login_alteracao) REFERENCES public.user (id);
    ALTER TABLE public.autor_lesao ADD CONSTRAINT autor_lesao_fk0 FOREIGN KEY (id_autor) REFERENCES public.autor (id_autor);
    ALTER TABLE public.autor_lesao ADD CONSTRAINT autor_lesao_fk1 FOREIGN KEY (id_lesao) REFERENCES public.lesao (id_lesao);
    ALTER TABLE public.user ADD CONSTRAINT user_fk0 FOREIGN KEY (id_group) REFERENCES public.group (id_group);
    ALTER TABLE public.user ADD CONSTRAINT user_fk1 FOREIGN KEY (id_ceap) REFERENCES public.ceap (id_ceap);
    ALTER TABLE public.token ADD CONSTRAINT token_fk0 FOREIGN KEY (id_user) REFERENCES public.user (id);
    --
    --
    --TABELAS DO PORTAL (SITE) - FORMULÁRIO (INFO EXTERNA) & CONTATO
    --
    CREATE TABLE public.portal_informacao(
      id_portal_informacao integer NOT NULL,
      data_informacao timestamp,
      id_geografia integer,
      periodo_dia varchar(50),
      descricao_informacao text,
      autor_lesao varchar(100),
      autor_lesao_indique varchar(100),
      autor_lesao_mais_info varchar(100),
    --identificacao_denunciante ?,--tipo?
      denunciante_vitima varchar(20),
      autoriza_identificacao varchar(1),
      suporte_juridico varchar(1),
      suporte_psicossocial varchar(1),--varchar(1)?
      suporte_serv_social varchar(1),--varchar(1)?
      importante boolean,
      obs_ocorrencia varchar,
    --logradouro_sede ?,--tipo?
      telefone varchar(11),
      email varchar(100),
    --obs_portal_info ?,--tipo?
      data_inclusao timestamp,
      alterado_por varchar(50),
      alterado_em timestamp,
      CONSTRAINT id_portal_informacao_pk PRIMARY KEY("id_portal_informacao")
    );
    CREATE TABLE public.portal_contato(--2 colunas novas
      id_portal_contato integer NOT NULL,
    --status ?,--tipo?--coluna_nova
      data_inclusao timestamp,
      mensagem text,
      assunto varchar(100),
      assunto_indique varchar(100),
      nome_contatante varchar(100),--coluna_nome_novo
      instituicao varchar(100),
      email varchar(100),
      telefone varchar(11),
    --obs_contato ?,--tipo?
      alterado_por varchar(50),
      alterado_em timestamp,
      CONSTRAINT id_portal_contato_pk PRIMARY KEY("id_portal_contato")
    );
    ALTER TABLE public.portal_informacao ADD CONSTRAINT portal_informacao_fk0 FOREIGN KEY (id_geografia) REFERENCES public.geografia (id_geografia);
    `)
  }

  down () {
    this.raw('DROP TABLE vitima, ocupacao, religiao_credo, nacionalidade, vitima_lesao, ocorrencia, fonte, fonte_tipo, depoimento, tipo_depoente, depoimento_lesao, lesao, conduta, meio_instrumento, tipo_crime, natureza_lesao, dh_artigo, geografia, localizacao_municipio, localizacao_uf, ceap, autor, instituicao, cargo_funcao, autor_lesao, portal_informacao, portal_contato, "user", token, "group"')
  }
}

module.exports = InitialDatabaseSchema
