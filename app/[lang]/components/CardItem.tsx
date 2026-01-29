'use client'

import { Badge, Divider, Card, CardBody, CardFooter, Image, Link } from '@heroui/react'
import { motion } from 'framer-motion'
import { FiArrowRight } from "react-icons/fi"
import { cn } from "@/lib/utils"

interface CardItemData {
  id: string
  title: string
  shortDescription: string
  thumbCard: string
  year: string
}

interface CardItemProps {
  data: CardItemData
  lang: string
  colSpan?: string
  buttonText: string
}

export default function CardItem({
  data,
  lang,
  colSpan,
  buttonText,
}: CardItemProps) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      initial={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`group relative ${colSpan}`}
    >
      <Card shadow="sm" isBlurred className="h-full relative overflow-hidden">
        <CardBody className="overflow-visible pt-4 pb-2 px-6 bg-gradient-to-b from-5% to-transparent dark:from-primary-800 dark:to-70%">
          {/* Image with Badge */}
          <div className="flex justify-center mb-4 relative z-10">
            <Badge
              content={data.year}
              color="warning"
              size="md"
              variant="shadow"
              placement="top-right"
            >
              <Image
                shadow="none"
                loading="lazy"
                alt={data.title}
                className="object-fill w-auto h-[140px] sm:h-[240px] md:h-[200px] mx-auto"
                src={data.thumbCard}
                width={200}
                height={200}
              />
            </Badge>
          </div>

          <div className="absolute inset-x-0 top-0 h-[calc(140px+2rem+1rem)] sm:h-[calc(240px+2rem+1rem)] md:h-[calc(200px+2rem+1rem)] bg-gradient-to-t from-primary/0 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-t-xl" />

          <span className="font-bold text-xl mb-2 relative z-10">{data.title}</span>
          <p className="text-pretty font-light text-medium text-zinc-800 dark:text-gray-300">
            {data.shortDescription}
          </p>
        </CardBody>

        <Divider />

        <CardFooter className="pt-2 px-6 pb-4">
          <Link
            href={`/${lang}/works/${data.id}`}
            className={cn(
              "group/btn inline-flex items-center gap-2 w-fit",
              "text-sm font-medium text-accent",
              "transition-all duration-300",
              "hover:gap-3"
            )}
          >
            <span className="relative text-primary">
              {buttonText}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/btn:w-full" />
            </span>
            <FiArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 text-primary" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
