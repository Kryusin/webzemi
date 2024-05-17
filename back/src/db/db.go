package db

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func NewDB() *gorm.DB {
	if os.Getenv("GO_ENV") == "dev" {
		//.env ファイルから環境変数を読み込みます。
		err := godotenv.Load()
		if err != nil {
			log.Fatalln(err)
		}
	}
	//fmt.Sprintf 関数を使用して、PostgreSQL への接続 URL 文字列を作成します
	//%s は、後続の os.Getenv 呼び出しで取得される環境変数の値で置き換えられます。
	url := fmt.Sprintf("postgres://%s:%s@%s:%s/%s", os.Getenv("POSTGRES_USER"),
		os.Getenv("POSTGRES_PW"), os.Getenv("POSTGRES_HOST"),
		os.Getenv("POSTGRES_PORT"), os.Getenv("POSTGRES_DB"))

	//(postgres.Open(url)) を使って、GORM (gorm.Open) を介してデータベースへの接続
	db, err := gorm.Open(postgres.Open(url), &gorm.Config{})
	if err != nil {
		log.Fatalln(url)
		// log.Fatalln(err)
	}
	fmt.Println("Connceted")
	return db
}

func CloseDB(db *gorm.DB) {
	sqlDB, _ := db.DB()
	if err := sqlDB.Close(); err != nil {
		log.Fatalln(err)
	}
}