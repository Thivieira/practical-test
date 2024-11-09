<table class="form-table" role="presentation">
	<tbody>
	<tr>
		<th>Email</th>
		<td><?php echo esc_html( $profile->email ); ?></td>
	</tr>
	<tr>
		<th>Name</th>
		<td><?php echo esc_html( $profile->name ); ?></td>
	</tr>
	<tr>
		<th>Phone</th>
		<td><?php echo esc_html( $profile->phone ); ?></td>
	</tr>
	<tr>
		<th>Address</th>
		<td><?php echo esc_html( $profile->street ); ?></td>
	</tr>
	<tr>
		<th>Unit</th>
		<td><?php echo esc_html( $profile->street_number ); ?></td>
	</tr>
	<tr>
		<th>City</th>
		<td><?php echo esc_html( $profile->city ); ?></td>
	</tr>
	<tr>
		<th>State</th>
		<td><?php echo esc_html( $profile->state ); ?></td>
	</tr>
	<tr>
		<th>Zip</th>
		<td><?php echo esc_html( $profile->postal_code ); ?></td>
	</tr>
	<tr>
		<th>Country</th>
		<td><?php echo esc_html( $profile->country ); ?></td>
	</tr>
	<tr>
		<th>Interests</th>
		<td>
		<ul style="list-style-type: disc; padding-left: 10px">
			<?php $interests = json_decode( $profile->interests ); ?>
			<?php foreach ( $interests as $interest ) : ?>
			<li><?php echo esc_html( $interest ); ?></li>
			<?php endforeach; ?>
		</ul>
		</td>
	</tr>
	<tr>
		<th>CV</th>
		<td><?php echo esc_html( $profile->cv ); ?></td>
	</tr>
	</tbody>
</table>
