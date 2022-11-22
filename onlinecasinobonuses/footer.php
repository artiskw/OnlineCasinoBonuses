<footer>
    <?php $footer = get_field('footer', 7); ?>
    <div class="text-icon-container">
        <p><?php echo $footer['text']; ?></p>
        <div class="icon">
            <?php foreach ($footer['icons'] as $icons) : ?>
                <a href="<?php echo $icons['link']; ?>" target="_blank">
                    <?php echo $icons['icon']; ?>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="copyright-menu">
        <p><?php echo $footer['copyright']; ?></p>
        <div class="menu">
            <?php echo wp_nav_menu(array('menu' => 'Footer menu')); ?>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>




