'use client'

import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/AppContext'
import { fetchData } from '@/utils/fetchData'
import { getCookie } from 'cookies-next'
import Link from 'next/link'
import Header from '@/layout/Header/Header'
import Card from '@/components/Card/Card'
import CategoriesButton from '@/components/Inputs/CategoriesButton/CategoriesButton'
import { blue, white } from '@/themes/colors'

const DetailPage = ({ params }) => {
  const { blogs } = useContext(AppContext)
  const [blog, setBlog] = useState(null)
  const [similarBlogs, setSimilarBlogs] = useState(null)

  useEffect(() => {
    const token = getCookie('token')
    if (!token) {
      // redirect;
    }
    const handler = async () => {
      const data = await fetchData(`blogs/${params.id}`, {
        method: 'get',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      const categoryIds = data.categories.map((item) => item.id)
      const similarBlogs = blogs.filter((innerBlog) => {
        return innerBlog.categories.find((item) =>
          categoryIds.includes(item.id)
        )
      })
      setSimilarBlogs(similarBlogs)
      setBlog(data)
    }
    handler()
  }, [])
  if (!blog) return <p>loading...</p>

  return (
    <div>
      <Header />
      <div className="bg-white01">
        <div className="cont flex flex-col gap-9-8 pt-4-0 pb-47-5">
          <div className="flex gap-24-0 items-start">
            <Link href="/">
              <img src="/svg/Arrow-white.svg" />
            </Link>
            <div className="flex flex-col gap-4-0 flex-wrap font-fR text-1-6 w-72-0">
              <div className="rounded-1-2 h-32-8 overflow-hidden">
                <img
                  src="/images/test.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2-4">
                <div className="flex flex-col gap-0-8">
                  <p className="font-fN text-dark">ლილე კვარაცხელია</p>
                  <p className="text-1-2 text-grey">
                    02.11.2023 • lile.kvaratskhelia@redberry.ge
                  </p>
                </div>
                <p className="font-fB text-dark text-3-2">
                  მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია
                </p>
                <div className="flex gap-1-6">
                  <CategoriesButton
                    backgroundColor={blue}
                    textColor={white}
                    disabled
                  >
                    მარკეტი
                  </CategoriesButton>
                  <CategoriesButton
                    backgroundColor={blue}
                    textColor={white}
                    disabled
                  >
                    მარკეტი
                  </CategoriesButton>
                  <CategoriesButton
                    backgroundColor={blue}
                    textColor={white}
                    disabled
                  >
                    ხელოვნური ინტელექტი
                  </CategoriesButton>
                </div>
              </div>
              <p className="text-1-6 text-dark01">
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
                მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ.
                „მუსიკალური ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, —
                აღნიშნა ბერნის ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ
                ჰერენბერგმა. რა თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის
                საბოლოო დასკვნების გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ,
                უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა მოასმენინონ რამდენიმე
                ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს. აქვე საგულისხმოა, რომ
                როგორც ბერნის მეცნიერები განმარტავენ, ექსპერიმენტს საფუძვლად არა
                ყველის გაუმჯობესებული წარმოება, არამედ კულტურული საკითხები
                დაედო. მათი თქმით, ადამიანებს უყვართ ყველი და მუსიკა, ამიტომაც
                საინტერესოა ამ ორის კავშირის დანახვა.
              </p>
              <p className="text-1-6 text-dark01">
                6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
                სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
                მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ.
                „მუსიკალური ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, —
                აღნიშნა ბერნის ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ
                ჰერენბერგმა. რა თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის
                საბოლოო დასკვნების გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ,
                უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა მოასმენინონ რამდენიმე
                ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4-0">
            <div className="flex justify-between">
              <p className="font-fB text-3-2 text-dark">მსგავსი სტატიები</p>
              <div className="flex gap-2-4">
                <img src="/svg/Arrow-grey.svg" />
                <img src="/svg/Arrow-blue.svg" />
              </div>
            </div>
            {similarBlogs && (
              <div className="grid grid-cols-3 gap-3-2">
                <Card />
                <Card />
                <Card />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
