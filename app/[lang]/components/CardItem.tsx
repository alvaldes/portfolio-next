'use client'

import { Badge, Button, Card, CardBody, Image, Link } from '@heroui/react'
import { motion } from 'framer-motion'

export default function CardItem({
  data,
  lang,
  colSpan,
  dictionary
}: any) {
  return (
    <motion.div
      whileHover={{ translateY: -8 }}
      initial={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`relative ${colSpan}`}
    >
      <Card shadow="sm" className="h-full relative overflow-hidden">
        <CardBody className="overflow-visible pt-4 pb-6 px-6 bg-gradient-to-b from-background to-background/40 dark:from-primary-800 dark:to-70%">
          {/* Overlay inside CardBody */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="z-20 absolute inset-0 bg-gradient-to-t from-background/70 from-30% via-background/100 via-35% to-background/90 to-95% dark:from-black/80 dark:via-black/95 dark:to-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            <Button
              href={`/${lang}/works/${data.id}`}
              as={Link}
              color="primary"
              variant="bordered"
              size="sm"
            >
              {dictionary.more}
            </Button>
          </motion.div>

          {/* Image with Badge */}
          <div className="flex justify-center mb-4">
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
          <span className="font-bold text-xl mb-2">{data.title}</span>
          <p className="text-pretty font-light text-medium text-zinc-800 dark:text-gray-300">
            {data.shortDescription}
          </p>
        </CardBody>
      </Card>
    </motion.div>
  )
}
