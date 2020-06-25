
CREATE SEQUENCE public.users_id_user_seq_1_2_1;

CREATE TABLE public.Users (
                id_user INTEGER NOT NULL DEFAULT nextval('public.users_id_user_seq_1_2_1'),
                email VARCHAR(80) NOT NULL,
                name VARCHAR(50) NOT NULL,
                password VARCHAR NOT NULL,
                CONSTRAINT users_pk PRIMARY KEY (id_user)
);


ALTER SEQUENCE public.users_id_user_seq_1_2_1 OWNED BY public.Users.id_user;

CREATE UNIQUE INDEX unique_users_email
 ON public.Users
 ( email );

CREATE UNIQUE INDEX unique_users_name
 ON public.Users
 ( name );

CREATE SEQUENCE public.fonts_id_font_seq_1_1;

CREATE TABLE public.Fonts (
                id_font INTEGER NOT NULL DEFAULT nextval('public.fonts_id_font_seq_1_1'),
                name VARCHAR(100) NOT NULL,
                CONSTRAINT font_pk PRIMARY KEY (id_font)
);


ALTER SEQUENCE public.fonts_id_font_seq_1_1 OWNED BY public.Fonts.id_font;

CREATE UNIQUE INDEX unique_fonts_name
 ON public.Fonts
 ( name );

CREATE SEQUENCE public.formats_id_format_seq;

CREATE TABLE public.Formats (
                id_format INTEGER NOT NULL DEFAULT nextval('public.formats_id_format_seq'),
                name VARCHAR(50) NOT NULL,
                left_margin INTEGER DEFAULT 0 NOT NULL,
                right_margin INTEGER DEFAULT 0 NOT NULL,
                top_margin INTEGER DEFAULT 0 NOT NULL,
                botton_margin INTEGER DEFAULT 0 NOT NULL,
                bold BOOLEAN DEFAULT false NOT NULL,
                italic BOOLEAN DEFAULT false NOT NULL,
                underlined BOOLEAN DEFAULT false NOT NULL,
                capitalize BOOLEAN DEFAULT false NOT NULL,
                uppercase BOOLEAN DEFAULT false NOT NULL,
                lowercase BOOLEAN DEFAULT false NOT NULL,
                font_size INTEGER DEFAULT 10 NOT NULL,
                indent_paragraph INTEGER DEFAULT 0 NOT NULL,
                id_font INTEGER NOT NULL,
                CONSTRAINT format_pk PRIMARY KEY (id_format)
);


ALTER SEQUENCE public.formats_id_format_seq OWNED BY public.Formats.id_format;

CREATE SEQUENCE public.articles_id_article_seq_1_1;

CREATE TABLE public.Articles (
                id_article INTEGER NOT NULL DEFAULT nextval('public.articles_id_article_seq_1_1'),
                title VARCHAR(200) NOT NULL,
                id_user INTEGER NOT NULL,
                id_format INTEGER NOT NULL,
                CONSTRAINT article_pk PRIMARY KEY (id_article)
);


ALTER SEQUENCE public.articles_id_article_seq_1_1 OWNED BY public.Articles.id_article;

CREATE SEQUENCE public.topics_id_topic_seq;

CREATE TABLE public.Topics (
                id_topic INTEGER NOT NULL DEFAULT nextval('public.topics_id_topic_seq'),
                title VARCHAR(200) NOT NULL,
                text TEXT NOT NULL,
                id_article INTEGER NOT NULL,
                CONSTRAINT topic_pk PRIMARY KEY (id_topic)
);


ALTER SEQUENCE public.topics_id_topic_seq OWNED BY public.Topics.id_topic;

ALTER TABLE public.Articles ADD CONSTRAINT users_articles_fk
FOREIGN KEY (id_user)
REFERENCES public.Users (id_user)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Formats ADD CONSTRAINT fonts_formats_fk
FOREIGN KEY (id_font)
REFERENCES public.Fonts (id_font)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Articles ADD CONSTRAINT formats_articles_fk
FOREIGN KEY (id_format)
REFERENCES public.Formats (id_format)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.Topics ADD CONSTRAINT articles_topics_fk
FOREIGN KEY (id_article)
REFERENCES public.Articles (id_article)
ON DELETE CASCADE
ON UPDATE CASCADE
NOT DEFERRABLE;
